import requests

URL = 'https://scholar.googleusercontent.com/citations?view_op=export_citations&user=JtSAIqgAAAAJ&citsig=AMD79ooAAAAAYEerXzdIALaAeL3goamu28BB1p8NLHDg&hl=en'
page = requests.get(URL)

print(type(page.content))