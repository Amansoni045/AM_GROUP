import os

def remove_blur_filters(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".tsx") or file.endswith(".ts"):
                path = os.path.join(root, file)
                with open(path, 'r') as f:
                    content = f.read()
                
                new_content = content.replace(', filter: "blur(10px)"', '')
                new_content = new_content.replace('filter: "blur(10px)", ', '')
                new_content = new_content.replace('filter: "blur(10px)"', '')
                
                new_content = new_content.replace(', filter: "blur(0px)"', '')
                new_content = new_content.replace('filter: "blur(0px)", ', '')
                new_content = new_content.replace('filter: "blur(0px)"', '')
                
                if new_content != content:
                    with open(path, 'w') as f:
                        f.write(new_content)
                    print(f"Updated {path}")

if __name__ == "__main__":
    remove_blur_filters("src")
