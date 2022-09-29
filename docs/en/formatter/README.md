---
sidebarDepth: 3
sidebar: auto
---
# Formatter
formatter contains some functions for data formatting.

<div STYLE="page-break-after: always;"></div>

## Source:

- [https://github.com/duke-git/lancet/blob/main/formatter/formatter.go](https://github.com/duke-git/lancet/blob/main/formatter/formatter.go)

<div STYLE="page-break-after: always;"></div>

## Usage:
```go
import (
    "github.com/duke-git/lancet/v2/formatter"
)
```

<div STYLE="page-break-after: always;"></div>

## Index
- [Comma](#Comma)

<div STYLE="page-break-after: always;"></div>

## Documentation



### <span id="Comma">Comma</span>
<p>Add comma to number by every 3 numbers from right. ahead by symbol char.
Param should be number or numberic string.</p>

<b>Signature:</b>

```go
func Comma(v any, symbol string) string
```
<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/formatter"
)

func main() {
    fmt.Println(formatter.Comma("12345", ""))   // "12,345"
    fmt.Println(formatter.Comma(12345.67, "¥")) // "¥12,345.67"
}
```