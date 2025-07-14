import os

def collate_voice_files(root_folder, output_file):
    exts = {'.ts', '.tsx', '.py'}
    with open(output_file, 'w', encoding='utf-8') as out:
        for dirpath, _, filenames in os.walk(root_folder):
            for fname in filenames:
                ext = os.path.splitext(fname)[-1].lower()
                if ext in exts:
                    rel_path = os.path.relpath(os.path.join(dirpath, fname), root_folder)
                    out.write(f"\n\n### FILE: {rel_path}\n\n")
                    try:
                        with open(os.path.join(dirpath, fname), 'r', encoding='utf-8') as f:
                            out.write(f.read())
                    except Exception as e:
                        out.write(f"\n[ERROR reading {rel_path}: {e}]\n")

if __name__ == "__main__":
    collate_voice_files("voice", "all_code_voice_tspy.txt")
    print("Collated all .ts, .tsx, .py files in 'voice/' into all_code_voice_tspy.txt")
