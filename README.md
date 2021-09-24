##### Git Large File Storage kommandoer (for store filer for opplastning til vanlig github)
# Velge hva man skal tracke
`git lfs track '*.mp4'`

# Skjekke hva man allerede tracker
`git lfs ls-files`

# Hvis det ikke funker kan man prøve:
`git add .gitattributes`
`brew reinstall git-lfs`

# Dersom man ønsker å tracke noe som allerede er comitted uten å være tracked først:
`git lfs migrate info`
`git lfs migrate import --include"*.mp4"`

# Dersom man har migrert for mye
`git lfs migrate export --include="*.html"`





# Dersom det blir problemer med push og man trenger å lage token
`git remote set-url origin https://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@github.com/FelixBaastadBerg/kateter`
`git remote set-url origin https://<token>@github.com/FelixBaastadBerg/kateter`
`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`
