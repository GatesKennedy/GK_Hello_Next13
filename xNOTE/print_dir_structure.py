import os
import sys
from pathlib import Path
from datetime import datetime
from typing import Dict, Set

# Base patterns to ignore across all project types
BASE_IGNORE_PATTERNS = {
    # Version Control
    ".git",

    # IDE/Editor
    ".vscode",
    ".idea",
    "*.swp",
    "*.swo",
    ".vs",

    # OS
    ".DS_Store",
    "Thumbs.db"
}

# Framework-specific ignore patterns
FRAMEWORK_IGNORE_PATTERNS: Dict[str, Set[str]] = {
    "python": {
        "__pycache__",
        ".pytest_cache",
        "*.pyc",
        "*.pyo",
        "*.pyd",
        ".Python",
        "env",
        "venv",
        ".env",
        ".venv",
        "ENV",
        "build",
        "develop-eggs",
        "dist",
        "downloads",
        "eggs",
        "lib",
        "lib64",
        "parts",
        "sdist",
        "var",
        "wheels",
        "*.egg-info",
        "*.egg",
        ".coverage",
        ".tox",
        ".nox",
        "htmlcov",
        ".mypy_cache",
        ".ruff_cache",
        ".pylint.d"
    },
    "nextjs": {
        ".next",
        "node_modules",
        "out",
        ".env*.local",
        ".vercel",
        "*.log",
        "coverage",
        ".turbo",
        "build",
        "dist",
        "storybook-static"
    }
}

def detect_framework(directory_path: str) -> str:
    """
    Detect the framework used in the project based on key files.

    Args:
        directory_path: Root directory of the project

    Returns:
        String indicating the detected framework
    """
    path = Path(directory_path)

    # Check for Next.js
    if (path / "next.config.js").exists() or (path / "next.config.ts").exists():
        return "nextjs"

    # Check for Python
    if (path / "requirements.txt").exists() or (path / "setup.py").exists():
        return "python"

    # Default to base configuration if no framework detected
    return "base"

def get_ignore_patterns(framework: str) -> Set[str]:
    """
    Get the combined set of ignore patterns for the specified framework.

    Args:
        framework: String indicating the project framework

    Returns:
        Set of patterns to ignore
    """
    patterns = BASE_IGNORE_PATTERNS.copy()
    if framework in FRAMEWORK_IGNORE_PATTERNS:
        patterns.update(FRAMEWORK_IGNORE_PATTERNS[framework])
    return patterns

def should_include(path: Path, ignore_patterns: Set[str]) -> bool:
    """
    Determine if a path should be included in the tree.

    Args:
        path: Path object to check
        ignore_patterns: Set of patterns to ignore

    Returns:
        Boolean indicating if path should be included
    """
    for pattern in ignore_patterns:
        if pattern.startswith("*"):
            if path.name.endswith(pattern[1:]):
                return False
        elif pattern in path.parts or path.name == pattern:
            return False
    return True

def generate_tree_content(directory_path: str, ignore_patterns: Set[str], prefix: str = "", is_last: bool = True) -> list:
    """
    Generate directory tree structure content as a list of strings.

    Args:
        directory_path: The path to start traversing from
        ignore_patterns: Set of patterns to ignore
        prefix: Current line prefix for formatting
        is_last: Boolean indicating if current item is last in its group

    Returns:
        List of strings containing the tree structure
    """
    directory = Path(directory_path)

    if not should_include(directory, ignore_patterns):
        return []

    content = []

    if is_last:
        content.append(f"{prefix}└── {directory.name}")
        new_prefix = prefix + "    "
    else:
        content.append(f"{prefix}├── {directory.name}")
        new_prefix = prefix + "│   "

    if directory.is_dir():
        items = list(directory.iterdir())
        items = [item for item in items if should_include(item, ignore_patterns)]
        items.sort(key=lambda x: (not x.is_dir(), x.name.lower()))

        for index, item in enumerate(items):
            is_last_item = index == len(items) - 1
            content.extend(generate_tree_content(str(item), ignore_patterns, new_prefix, is_last_item))

    return content

def write_tree_to_markdown(root_path: str, output_file: str = "directory_structure.md") -> None:
    """
    Write the directory tree structure to a markdown file.

    Args:
        root_path: The root directory path to start from
        output_file: The name of the output markdown file
    """
    if not os.path.exists(root_path):
        print(f"Error: Path '{root_path}' does not exist")
        sys.exit(1)

    # Detect framework and get appropriate ignore patterns
    framework = detect_framework(root_path)
    ignore_patterns = get_ignore_patterns(framework)

    # Generate content
    content = [f"# Project Directory Structure ({framework.title()})\n"]
    content.append(f"Generated on: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
    content.append(f"Root path: {os.path.abspath(root_path)}\n")
    content.append(f"Framework: {framework.title()}\n")
    content.append("```")
    content.extend(generate_tree_content(root_path, ignore_patterns))
    content.append("```")

    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write('\n'.join(content))
        print(f"Directory structure has been written to {output_file}")
    except Exception as e:
        print(f"Error writing to file: {e}")
        sys.exit(1)

def main():
    root_path = sys.argv[1] if len(sys.argv) > 1 else "."
    output_file = sys.argv[2] if len(sys.argv) > 2 else "directory_structure.md"
    write_tree_to_markdown(root_path, output_file)

if __name__ == "__main__":
    main()