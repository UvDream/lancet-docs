---
sidebarDepth: 3
sidebar: auto
---

# Cryptor

Package cryptor contains some functions for data encryption and decryption. Support base64, md5, hmac, aes, des, rsa.

<div STYLE="page-break-after: always;"></div>

## Source:

- [https://github.com/duke-git/lancet/blob/main/cryptor/aes.go](https://github.com/duke-git/lancet/blob/main/cryptor/aes.go)
- [https://github.com/duke-git/lancet/blob/main/cryptor/des.go](https://github.com/duke-git/lancet/blob/main/cryptor/des.go)
- [https://github.com/duke-git/lancet/blob/main/cryptor/basic.go](https://github.com/duke-git/lancet/blob/main/cryptor/basic.go)
- [https://github.com/duke-git/lancet/blob/main/cryptor/rsa.go](https://github.com/duke-git/lancet/blob/main/cryptor/rsa.go)

<div STYLE="page-break-after: always;"></div>

## Usage:

```go
import (
    "github.com/duke-git/lancet/v2/cryptor"
)
```

<div STYLE="page-break-after: always;"></div>

## Documentation

### AesEcbEncrypt

<p>Encrypt data with key use AES ECB algorithm. Length of `key` param should be 16, 24 or 32.</p>

<b>Signature:</b>

```go
func AesEcbEncrypt(data, key []byte) []byte
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/cryptor"
)

func main() {
    data := "hello world"
    key := "abcdefghijklmnop"
    encrypted := cryptor.AesEcbEncrypt([]byte(data), []byte(key))

    fmt.Println(string(encrypted))
}
```

### AesEcbDecrypt

<p>Decrypt data with key use AES ECB algorithm. Length of `key` param should be 16, 24 or 32.</p>

<b>Signature:</b>

```go
func AesEcbDecrypt(encrypted, key []byte) []byte
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/cryptor"
)

func main() {
    data := "hello world"
    key := "abcdefghijklmnop"
    encrypted := cryptor.AesEcbEncrypt([]byte(data), []byte(key))
    decrypted := cryptor.AesEcbDecrypt(encrypted, []byte(key))
    fmt.Println(string(decrypted)) //hello world
}
```

### AesCbcEncrypt

<p>Encrypt data with key use AES CBC algorithm. Length of `key` param should be 16, 24 or 32.</p>

<b>Signature:</b>

```go
func AesCbcEncrypt(data, key []byte) []byte
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/cryptor"
)

func main() {
    data := "hello world"
    key := "abcdefghijklmnop"
    encrypted := cryptor.AesCbcEncrypt([]byte(data), []byte(key))

    fmt.Println(string(encrypted))
}
```

### AesCbcDecrypt

<p>Decrypt data with key use AES CBC algorithm. Length of `key` param should be 16, 24 or 32.</p>

<b>Signature:</b>

```go
func AesCbcDecrypt(encrypted, key []byte) []byte
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/cryptor"
)

func main() {
    data := "hello world"
    key := "abcdefghijklmnop"
    encrypted := cryptor.AesCbcEncrypt([]byte(data), []byte(key))
    decrypted := cryptor.AesCbcDecrypt(encrypted, []byte(key))
    fmt.Println(string(decrypted)) //hello world
}
```

### AesCtrCrypt

<p>Encrypt or decrypt data with key use AES CTR algorithm. Length of `key` param should be 16, 24 or 32.</p>

<b>Signature:</b>

```go
func AesCtrCrypt(data, key []byte) []byte
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/cryptor"
)

func main() {
    data := "hello world"
    key := "abcdefghijklmnop"
    encrypted := cryptor.AesCtrCrypt([]byte(data), []byte(key))
    decrypted := cryptor.AesCtrCrypt(encrypted, []byte(key))

    fmt.Println(string(decrypted)) //hello world
}
```

### AesCfbEncrypt

<p>Encrypt data with key use AES CFB algorithm. Length of `key` param should be 16, 24 or 32.</p>

<b>Signature:</b>

```go
func AesCfbEncrypt(data, key []byte) []byte
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/cryptor"
)

func main() {
    data := "hello world"
    key := "abcdefghijklmnop"
    encrypted := cryptor.AesCfbEncrypt([]byte(data), []byte(key))
    fmt.Println(string(encrypted))
}
```

### AesCfbDecrypt

<p>Decrypt data with key use AES CBC algorithm. Length of `key` param should be 16, 24 or 32.</p>

<b>Signature:</b>

```go
func AesCfbDecrypt(encrypted, key []byte) []byte
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/cryptor"
)

func main() {
    data := "hello world"
    key := "abcdefghijklmnop"
    encrypted := cryptor.AesCfbEncrypt([]byte(data), []byte(key))
    decrypted := cryptor.AesCfbDecrypt(encrypted, []byte(key))
    fmt.Println(string(decrypted)) //hello world
}
```

### AesOfbEncrypt

<p>Enecrypt data with key use AES OFB algorithm. Length of `key` param should be 16, 24 or 32.</p>

<b>Signature:</b>

```go
func AesOfbEncrypt(data, key []byte) []byte
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/cryptor"
)

func main() {
    data := "hello world"
    key := "abcdefghijklmnop"
    encrypted := cryptor.AesOfbEncrypt([]byte(data), []byte(key))
    fmt.Println(string(encrypted))
}
```

### AesOfbDecrypt

<p>Decrypt data with key use AES OFB algorithm. Length of `key` param should be 16, 24 or 32.</p>

<b>Signature:</b>

```go
func AesOfbDecrypt(encrypted, key []byte) []byte
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/cryptor"
)

func main() {
    data := "hello world"
    key := "abcdefghijklmnop"
    encrypted := cryptor.AesOfbEncrypt([]byte(data), []byte(key))
    decrypted := cryptor.AesOfbDecrypt(encrypted, []byte(key))

    fmt.Println(string(decrypted)) //hello world
}
```

### Base64StdEncode

<p>Encode string with base64 encoding.</p>

<b>Signature:</b>

```go
func Base64StdEncode(s string) string
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/cryptor"
)

func main() {
    base64Str := cryptor.Base64StdEncode("hello world")
    fmt.Println(base64Str) //aGVsbG8gd29ybGQ=
}
```

### Base64StdDecode

<p>Decode a base64 encoded string.</p>

<b>Signature:</b>

```go
func Base64StdDecode(s string) string
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/cryptor"
)

func main() {
    str := cryptor.Base64StdDecode("aGVsbG8gd29ybGQ=")
    fmt.Println(str) //hello world
}
```

### DesEcbEncrypt

<p>Encrypt data with key use DES ECB algorithm. Length of `key` param should be 8.</p>

<b>Signature:</b>

```go
func DesEcbEncrypt(data, key []byte) []byte
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/cryptor"
)

func main() {
    data := "hello world"
    key := "abcdefgh"
    encrypted := cryptor.DesEcbEncrypt([]byte(data), []byte(key))

    fmt.Println(string(encrypted))
}
```

### DesEcbDecrypt

<p>Decrypt data with key use DES ECB algorithm. Length of `key` param should be 8.</p>

<b>Signature:</b>

```go
func DesEcbDecrypt(encrypted, key []byte) []byte
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/cryptor"
)

func main() {
    data := "hello world"
    key := "abcdefgh"
    encrypted := cryptor.DesEcbEncrypt([]byte(data), []byt(key)
    decrypted := cryptor.DesEcbDecrypt(encrypted, []byte(key))

    fmt.Println(string(decrypted)) //hello world
}
```

### DesCbcEncrypt

<p>Encrypt data with key use DES CBC algorithm. Length of `key` param should be 8.</p>

<b>Signature:</b>

```go
func DesCbcEncrypt(data, key []byte) []byte
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/cryptor"
)

func main() {
    data := "hello world"
    key := "abcdefgh"
    encrypted := cryptor.DesCbcEncrypt([]byte(data), []byt(key)

    fmt.Println(string(encrypted))
}
```

### DesCbcDecrypt

<p>Decrypt data with key use DES CBC algorithm. Length of `key` param should be 8.</p>

<b>Signature:</b>

```go
func DesCbcDecrypt(encrypted, key []byte) []byte
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/cryptor"
)

func main() {
    data := "hello world"
    key := "abcdefgh"
    encrypted := cryptor.DesCbcEncrypt([]byte(data), []byt(key)
	decrypted := cryptor.DesCbcDecrypt(encrypted, []byte(key))

    fmt.Println(string(decrypted)) //hello world
}
```

### DesCtrCrypt

<p>Encrypt or decrypt data with key use DES CTR algorithm. Length of `key` param should be 8.</p>

<b>Signature:</b>

```go
func DesCtrCrypt(data, key []byte) []byte
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/cryptor"
)

func main() {
    data := "hello world"
    key := "abcdefgh"
    encrypted := cryptor.DesCtrCrypt([]byte(data), []byte(key))
    decrypted := cryptor.DesCtrCrypt(encrypted, []byte(key))

    fmt.Println(string(decrypted)) //hello world
}
```

### DesCfbEncrypt

<p>Encrypt data with key use DES CFB algorithm. Length of `key` param should be 8.</p>

<b>Signature:</b>

```go
func DesCfbEncrypt(data, key []byte) []byte
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/cryptor"
)

func main() {
    data := "hello world"
    key := "abcdefgh"
    encrypted := cryptor.DesCfbEncrypt([]byte(data), []byt(key)
    fmt.Println(string(encrypted))
}
```

### DesCfbDecrypt

<p>Decrypt data with key use DES CBC algorithm. Length of `key` param should be 8.</p>

<b>Signature:</b>

```go
func DesCfbDecrypt(encrypted, key []byte) []byte
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/cryptor"
)

func main() {
    data := "hello world"
    key := "abcdefgh"
    encrypted := cryptor.DesCfbEncrypt([]byte(data), []byt(key)
    decrypted := cryptor.DesCfbDecrypt(encrypted, []byte(key))
    fmt.Println(string(decrypted)) //hello world
}
```

### DesOfbEncrypt

<p>Enecrypt data with key use DES OFB algorithm. Length of `key` param should be 8.</p>

<b>Signature:</b>

```go
func DesOfbEncrypt(data, key []byte) []byte
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/cryptor"
)

func main() {
    data := "hello world"
    key := "abcdefgh"
    encrypted := cryptor.DesOfbEncrypt([]byte(data), []byte(key))
    fmt.Println(string(encrypted))
}
```

### DesOfbDecrypt

<p>Decrypt data with key use DES OFB algorithm. Length of `key` param should be 8.</p>

<b>Signature:</b>

```go
func DesOfbDecrypt(encrypted, key []byte) []byte
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/cryptor"
)

func main() {
    data := "hello world"
    key := "abcdefgh"
    encrypted := cryptor.DesOfbEncrypt([]byte(data), []byte(key))
    decrypted := cryptor.DesOfbDecrypt(encrypted, []byte(key))

    fmt.Println(string(decrypted)) //hello world
}
```

### HmacMd5

<p>Get the md5 hmac hash of string.</p>

<b>Signature:</b>

```go
func HmacMd5(data, key string) string
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/cryptor"
)

func main() {
  	s := cryptor.HmacMd5("hello world", "12345"))
  	fmt.Println(s) //5f4c9faaff0a1ad3007d9ddc06abe36d
}
```

### HmacSha1

<p>Get the sha1 hmac hash of string.</p>

<b>Signature:</b>

```go
func HmacSha1(data, key string) string
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/cryptor"
)

func main() {
    s := cryptor.HmacSha1("hello world", "12345"))
    fmt.Println(s) //3826f812255d8683f051ee97346d1359234d5dbd
}
```

### HmacSha256

<p>Get the sha256 hmac hash of string</p>

<b>Signature:</b>

```go
func HmacSha256(data, key string) string
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/cryptor"
)

func main() {
    s := cryptor.HmacSha256("hello world", "12345"))
    fmt.Println(s) //9dce2609f2d67d41f74c7f9efc8ccd44370d41ad2de52982627588dfe7289ab8
}
```

### HmacSha512

<p>Get the sha512 hmac hash of string.</p>

<b>Signature:</b>

```go
func HmacSha512(data, key string) string
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/cryptor"
)

func main() {
    s := cryptor.HmacSha512("hello world", "12345"))
    fmt.Println(s)
 //5b1563ac4e9b49c9ada8ccb232588fc4f0c30fd12f756b3a0b95af4985c236ca60925253bae10ce2c6bf9af1c1679b51e5395ff3d2826c0a2c7c0d72225d4175
}
```

### Md5String

<p>Get the md5 value of string.</p>

<b>Signature:</b>

```go
func Md5String(s string) string
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/cryptor"
)

func main() {
    s := cryptor.Md5String("hello"))
    fmt.Println(s) //5d41402abc4b2a76b9719d911017c592
}
```

### Md5File

<p>Get the md5 value of file.</p>

<b>Signature:</b>

```go
func Md5File(filepath string) (string, error)
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/cryptor"
)

func main() {
    s := cryptor.Md5File("./main.go"))
    fmt.Println(s)
}
```

### Sha1

<p>Get the sha1 value of string.</p>

<b>Signature:</b>

```go
func Sha1(data string) string
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/cryptor"
)

func main() {
    s := cryptor.Sha1("hello world"))
    fmt.Println(s) //2aae6c35c94fcfb415dbe95f408b9ce91ee846ed
}
```

### Sha256

<p>Get the sha256 value of string.</p>

<b>Signature:</b>

```go
func Sha256(data string) string
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/cryptor"
)

func main() {
    s := cryptor.Sha256("hello world"))
    fmt.Println(s) //b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
}
```

### Sha512

<p>Get the sha512 value of string.</p>

<b>Signature:</b>

```go
func Sha512(data string) string
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/cryptor"
)

func main() {
    s := cryptor.Sha512("hello world"))
    fmt.Println(s) //309ecc489c12d6eb4cc40f50c902f2b4d0ed77ee511a7c7a9bcd3ca86d4cd86f989dd35bc5ff499670da34255b45b0cfd830e81f605dcf7dc5542e93ae9cd76f
}
```

### GenerateRsaKey

<p>Create the rsa public and private key file in current directory.</p>

<b>Signature:</b>

```go
func GenerateRsaKey(keySize int, priKeyFile, pubKeyFile string) error
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/cryptor"
)

func main() {
    err := cryptor.GenerateRsaKey(4096, "rsa_private.pem", "rsa_public.pem")
    if err != nil {
        fmt.Println(err)
    }
}
```

### RsaEncrypt

<p>Encrypt data with public key file useing ras algorithm.</p>

<b>Signature:</b>

```go
func RsaEncrypt(data []byte, pubKeyFileName string) []byte
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/cryptor"
)

func main() {
    err := cryptor.GenerateRsaKey(4096, "rsa_private.pem", "rsa_public.pem")
    if err != nil {
        fmt.Println(err)
    }

    data := []byte("hello world")
    encrypted := cryptor.RsaEncrypt(data, "rsa_public.pem")
    decrypted := cryptor.RsaDecrypt(encrypted, "rsa_private.pem")

    fmt.Println(string(decrypted)) //hello world
}
```

### RsaDecrypt

<p>Decrypt data with private key file useing ras algorithm.</p>

<b>Signature:</b>

```go
func RsaDecrypt(data []byte, privateKeyFileName string) []byte
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/cryptor"
)

func main() {
    err := cryptor.GenerateRsaKey(4096, "rsa_private.pem", "rsa_public.pem")
    if err != nil {
        fmt.Println(err)
    }

    data := []byte("hello world")
    encrypted := cryptor.RsaEncrypt(data, "rsa_public.pem")
    decrypted := cryptor.RsaDecrypt(encrypted, "rsa_private.pem")

    fmt.Println(string(decrypted)) //hello world
}
```
