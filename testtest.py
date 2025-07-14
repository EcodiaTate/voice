import os

def print_files(root_folder, extensions):
    found = False
    for dirpath, _, filenames in os.walk(root_folder):
        for fname in filenames:
            ext = os.path.splitext(fname)[-1].lower()
            if ext in extensions:
                rel_path = os.path.relpath(os.path.join(dirpath, fname), root_folder)
                print(rel_path)
                found = True
    if not found:
        print(f"No matching files found in {root_folder} for extensions: {extensions}")

# Check soul
if os.path.exists("soul"):
    print("\n.soul/.py files:")
    print_files("soul", {'.py'})
else:
    print("No 'soul' folder found.")

# Check voice
if os.path.exists("voice"):
    print("\n.voice/.py .ts .tsx files:")
    print_files("voice", {'.py', '.ts', '.tsx'})
else:
    print("No 'voice' folder found.")
