#!/bin/bash

files=(
"01_概述_仪盘表.md",
"02_运行配置_系统配置.md",
"03_运行配置_二方库管理.md",
"04_任务管理_任务列表.md",
"05_任务管理_任务日志.md",
"06_任务管理_历史版本.md",
"07_任务管理_保存点.md",
"08_任务管理_告警日志.md",
)

for file in "${files[@]}"
do
    echo "#${file%.*}" > "$file"
done
