---
sidebarDepth: 3
sidebar: auto
---

# System

Package system contains some functions about os, runtime, shell command.

<div STYLE="page-break-after: always;"></div>

## Source:

- [https://github.com/duke-git/lancet/blob/main/system/os.go](https://github.com/duke-git/lancet/blob/main/system/os.go)

<div STYLE="page-break-after: always;"></div>

## Usage:

```go
import (
    "github.com/duke-git/lancet/v2/system"
)
```

<div STYLE="page-break-after: always;"></div>

## Documentation

### IsWindows

<p>Check if current os is windows.</p>

<b>Signature:</b>

```go
func IsWindows() bool
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/system"
)

func main() {
	isOsWindows := system.IsWindows()
	fmt.Println(isOsWindows)
}
```

### IsLinux

<p>Check if current os is linux.</p>

<b>Signature:</b>

```go
func IsLinux() bool
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/system"
)

func main() {
	isOsLinux := system.IsLinux()
	fmt.Println(isOsLinux)
}
```

### IsMac

<p>Check if current os is macos.</p>

<b>Signature:</b>

```go
func IsMac() bool
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/system"
)

func main() {
	isOsMac := system.IsMac
	fmt.Println(isOsMac)
}
```

### GetOsEnv

<p>Gets the value of the environment variable named by the key.</p>

<b>Signature:</b>

```go
func GetOsEnv(key string) string
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/system"
)

func main() {
	fooEnv := system.GetOsEnv("foo")
	fmt.Println(fooEnv)
}
```

### SetOsEnv

<p>Sets the value of the environment variable named by the key.</p>

<b>Signature:</b>

```go
func SetOsEnv(key, value string) error
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/system"
)

func main() {
	err := system.SetOsEnv("foo", "foo_value")
	fmt.Println(err)
}
```

### RemoveOsEnv

<p>Remove a single environment variable.</p>

<b>Signature:</b>

```go
func RemoveOsEnv(key string) error
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/system"
)

func main() {
	err := system.RemoveOsEnv("foo")
	if err != nil {
		fmt.Println(err)
	}
}
```

### CompareOsEnv

<p>Get env named by the key and compare it with comparedEnv.</p>

<b>Signature:</b>

```go
func CompareOsEnv(key, comparedEnv string) bool
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/system"
)

func main() {
	system.SetOsEnv("foo", "foo_value")
	res := system.CompareOsEnv("foo", "foo_value")
	fmt.Println(res) //true
}
```

### CompareOsEnv

<p>Use shell /bin/bash -c(linux) or cmd (windows) to execute command.</p>

<b>Signature:</b>

```go
func ExecCommand(command string) (stdout, stderr string, err error)
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/system"
)

func main() {
	out, errout, err := system.ExecCommand("ls")
	fmt.Println(out)
	fmt.Println(errout)
	fmt.Println(err)
}
```

### GetOsBits

<p>Get current os bits, 32bit or 64bit. return 32 or 64</p>

<b>Signature:</b>

```go
func GetOsBits() int
```

<b>Example:</b>

```go
import (
	"fmt"
	"github.com/duke-git/lancet/v2/system"
)

func main() {
	osBit := system.GetOsBits()
	fmt.Println(osBit)
}
```
