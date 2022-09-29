---
sidebarDepth: 3
sidebar: auto
---

# Xerror

Package xerror implements helpers for errors.

<div STYLE="page-break-after: always;"></div>

## Source:

- [https://github.com/duke-git/lancet/blob/main/xerror/xerror.go](https://github.com/duke-git/lancet/blob/main/xerror/xerror.go)

<div STYLE="page-break-after: always;"></div>

## Usage:

```go
import (
    "github.com/duke-git/lancet/v2/xerror"
)
```

<div STYLE="page-break-after: always;"></div>

## Index

- [Unwrap](#Unwrap)

<div STYLE="page-break-after: always;"></div>

## Documentation

### Unwrap

<p>Unwrap if err is nil then it returns a valid value. If err is not nil, Unwrap panics with err.</p>

<b>Signature:</b>

```go
func Unwrap[T any](val T, err error) T
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/xerror"
)

func main() {
	_, err := strconv.Atoi("4o2")
	defer func() {
		v := recover()
		fmt.Println(err.Error()) // err.Error() == v.(*strconv.NumError).Error()
	}()

	xerror.Unwrap(strconv.Atoi("4o2"))
}
```
