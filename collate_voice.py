import os

OUTPUT_FILE = "all_code_voice_tspy.txt"
EXTS = {".py", ".ts", ".tsx"}
EXCLUDE_DIRS = {"node_modules", "dist", "build", ".git"}

with open(OUTPUT_FILE, "w", encoding="utf-8") as out:
    for dirpath, dirnames, filenames in os.walk("."):
        # Remove excluded dirs in-place (prevents os.walk from descending)
        dirnames[:] = [d for d in dirnames if d not in EXCLUDE_DIRS]
        for fname in filenames:
            if os.path.splitext(fname)[-1].lower() in EXTS:
                rel_path = os.path.relpath(os.path.join(dirpath, fname), ".")
                out.write(f"\n\n### FILE: {rel_path}\n\n")
                try:
                    with open(os.path.join(dirpath, fname), "r", encoding="utf-8") as f:
                        out.write(f.read())
                except Exception as e:
                    out.write(f"\n[ERROR reading {rel_path}: {e}]\n")

print(f"Collated all .py, .ts, .tsx files into {OUTPUT_FILE} (excluding node_modules, dist, build, .git)")
