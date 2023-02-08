import csv
import json
import os
import sys

def select_file_from_directory(directory_path):
    files = [f for f in os.listdir(directory_path) if os.path.isfile(os.path.join(directory_path, f))]

    for i, file in enumerate(files):
        print(f"{i+1}. {file}")

    selected_file_index = int(input("Enter the number of the file you want to select: ")) - 1
    selected_file = files[selected_file_index]
    
    return os.path.join(directory_path, selected_file)

def parse_csv_to_json(csv_file, json_file):
    with open(csv_file, 'r') as file:
        reader = csv.DictReader(file)
        rows = [row for row in reader]

    with open(json_file, 'w') as file:
        json.dump(rows, file)
        
def main():
    file = select_file_from_directory(".")
    jsonFile = input("Enter the name of the new json file with asociated path: ")
    parse_csv_to_json(file, jsonFile)
    if input("Parse Another File: [Y/N]") in ['Y', 'y', 'yes', 'YES']:
        main()
    else:
        sys.exit(0)
    
if __name__ == '__main__':
    main()