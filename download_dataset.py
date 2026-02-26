import kagglehub

# Download latest version
path = kagglehub.dataset_download("sunnykusawa/cloth-dataset")

print("Path to dataset files:", path)
