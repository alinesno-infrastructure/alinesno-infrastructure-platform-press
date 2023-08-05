#!/bin/bash

files=(
"01_概述_仪盘表.md",
"02_功能列表_应用管理.md",
"03_功能列表_文档管理.md",
"04_功能列表_请求记录.md",
"05_功能列表_存储配置.md",
)

for file in "${files[@]}"
do
    echo "#${file%.*}" > "$file"
done
