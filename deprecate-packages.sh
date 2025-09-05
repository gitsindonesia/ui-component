#!/bin/bash

# List of main UI component packages to deprecate
packages=(
  "alert"
  "app-bar"
  "app-shell"
  "autocomplete"
  "avatar"
  "badge"
  "banner"
  "bottom-navigation"
  "bottom-sheets"
  "breadcrumbs"
  "button"
  "card"
  "collapsible"
  "command"
  "container"
  "divider"
  "dropdown"
  "forms"
  "icon"
  "list"
  "logo"
  "menu"
  "menus"
  "modal"
  "multi-select"
  "nav-drawer"
  "navbar"
  "pagination"
  "popover"
  "progress"
  "progress-circlular"
  "rating"
  "select"
  "shimmer"
  "spinner"
  "stats"
  "switch"
  "table"
  "tabs"
  "text"
  "timeline"
  "tooltip"
)

for package in "${packages[@]}"; do
  package_file="packages/$package/package.json"
  
  if [ -f "$package_file" ]; then
    echo "Processing $package..."
    
    # Use node to update the package.json file
    node -e "
      const fs = require('fs');
      const pkg = JSON.parse(fs.readFileSync('$package_file', 'utf8'));
      
      // Add deprecated field and update description
      pkg.deprecated = '⚠️ DEPRECATED: Use @morpheme/ui instead. This package has been consolidated into @morpheme/ui.';
      
      // Update description to include deprecation notice
      if (pkg.description && !pkg.description.includes('DEPRECATED')) {
        pkg.description = '⚠️ DEPRECATED: Use @morpheme/ui instead. ' + pkg.description;
      }
      
      fs.writeFileSync('$package_file', JSON.stringify(pkg, null, 2) + '\n');
      console.log('✅ Deprecated @morpheme/$package');
    "
  else
    echo "❌ Package file not found: $package_file"
  fi
done

echo "🎉 All main UI component packages have been deprecated!"
