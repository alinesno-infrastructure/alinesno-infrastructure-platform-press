#!/bin/bash

files=(
"01_概述_仪盘表.md",
"02_数据上报_历史数据.md",
"03_数据上报_数据管理.md",
"04_数据上报_业务模型.md",
"05_数据上报_上报文件.md",
"06_数据上报_回收站.md",
"07_数据上报_数据分享.md",
"08_配置管理_定时任务.md",
"09_配置管理_上报异常.md",
)

for file in "${files[@]}"
do
    echo "#${file%.*}" > "$file"
done
