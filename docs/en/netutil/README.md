---
sidebarDepth: 3
sidebar: auto
---

# Netutil

Package netutil contains functions to get net information and send http request.

<div STYLE="page-break-after: always;"></div>

## Source:

- [https://github.com/duke-git/lancet/blob/main/netutil/net.go](https://github.com/duke-git/lancet/blob/main/netutil/net.go)

- [https://github.com/duke-git/lancet/blob/main/netutil/http_client.go](https://github.com/duke-git/lancet/blob/main/netutil/http_client.go)

- [https://github.com/duke-git/lancet/blob/main/netutil/http.go](https://github.com/duke-git/lancet/blob/main/netutil/http.go)

<div STYLE="page-break-after: always;"></div>

## Usage:

```go
import (
    "github.com/duke-git/lancet/v2/netutil"
)
```

<div STYLE="page-break-after: always;"></div>

## Documentation

### ConvertMapToQueryString

<p>Convert map to url query string.</p>

<b>Signature:</b>

```go
func ConvertMapToQueryString(param map[string]any) string
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/netutil"
)

func main() {
	var m = map[string]any{
		"c": 3,
		"a": 1,
		"b": 2,
	}
	qs := netutil.ConvertMapToQueryString(m)

	fmt.Println(qs) //a=1&b=2&c=3
}
```

### EncodeUrl

<p>Encode url query string values.</p>

<b>Signature:</b>

```go
func EncodeUrl(urlStr string) (string, error)
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/netutil"
)

func main() {
	urlAddr := "http://www.lancet.com?a=1&b=[2]"
	encodedUrl, err := netutil.EncodeUrl(urlAddr)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(encodedUrl) //http://www.lancet.com?a=1&b=%5B2%5D
}
```

### GetInternalIp

<p>Get internal ip information.</p>

<b>Signature:</b>

```go
func GetInternalIp() string
```

<b>Example:</b>

```go
package main

import (
    "fmt"
	"net"
    "github.com/duke-git/lancet/v2/netutil"
)

func main() {
	internalIp := netutil.GetInternalIp()
	ip := net.ParseIP(internalIp)

	fmt.Println(ip) //192.168.1.9
}
```

### GetIps

<p>Get all ipv4 list.</p>

<b>Signature:</b>

```go
func GetIps() []string
```

<b>Example:</b>

```go
package main

import (
    "fmt"
	"net"
    "github.com/duke-git/lancet/v2/netutil"
)

func main() {
	ips := netutil.GetIps()
	fmt.Println(ips) //[192.168.1.9]
}
```

### GetMacAddrs

<p>Get all mac addresses list.</p>

<b>Signature:</b>

```go
func GetMacAddrs() []string {
```

<b>Example:</b>

```go
package main

import (
    "fmt"
	"net"
    "github.com/duke-git/lancet/v2/netutil"
)

func main() {
	addrs := netutil.GetMacAddrs()
	fmt.Println(addrs)
}
```

### GetPublicIpInfo

<p>Get public ip information.</p>

<b>Signature:</b>

```go
func GetPublicIpInfo() (*PublicIpInfo, error)
type PublicIpInfo struct {
	Status      string  `json:"status"`
	Country     string  `json:"country"`
	CountryCode string  `json:"countryCode"`
	Region      string  `json:"region"`
	RegionName  string  `json:"regionName"`
	City        string  `json:"city"`
	Lat         float64 `json:"lat"`
	Lon         float64 `json:"lon"`
	Isp         string  `json:"isp"`
	Org         string  `json:"org"`
	As          string  `json:"as"`
	Ip          string  `json:"query"`
}
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/netutil"
)

func main() {
	publicIpInfo, err := netutil.GetPublicIpInfo()
	if err != nil {
		fmt.Println(err)
	}

	fmt.Println(publicIpInfo)
}
```

### GetRequestPublicIp

<p>Get http request public ip.</p>

<b>Signature:</b>

```go
func GetRequestPublicIp(req *http.Request) string
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/netutil"
)

func main() {
	ip := "36.112.24.10"

	request1 := http.Request{
		Method: "GET",
		Header: http.Header{
			"X-Forwarded-For": {ip},
		},
	}
	publicIp1 := netutil.GetRequestPublicIp(&request1)
	fmt.Println(publicIp1) //36.112.24.10

	request2 := http.Request{
		Method: "GET",
		Header: http.Header{
			"X-Real-Ip": {ip},
		},
	}
	publicIp2 := netutil.GetRequestPublicIp(&request2)
	fmt.Println(publicIp2) //36.112.24.10
}
```

### IsPublicIP

<p>Checks if an ip is public or not.</p>

<b>Signature:</b>

```go
func IsPublicIP(IP net.IP) bool
```

<b>Example:</b>

```go
package main

import (
    "fmt"
	"net"
    "github.com/duke-git/lancet/v2/netutil"
)

func main() {
	ip1 := net.ParseIP("192.168.0.1")
	ip2 := net.ParseIP("36.112.24.10")

	fmt.Println(netutil.IsPublicIP(ip1)) //false
	fmt.Println(netutil.IsPublicIP(ip2)) //true
}
```

### IsInternalIP

<p>Checks if an ip is intranet or not.</p>

<b>Signature:</b>

```go
func IsInternalIP(IP net.IP) bool
```

<b>Example:</b>

```go
package main

import (
    "fmt"
	"net"
    "github.com/duke-git/lancet/v2/netutil"
)

func main() {
	ip1 := net.ParseIP("127.0.0.1")
	ip2 := net.ParseIP("36.112.24.10")

	fmt.Println(netutil.IsInternalIP(ip1)) //true
	fmt.Println(netutil.IsInternalIP(ip2)) //false
}
```

### HttpRequest

<p>HttpRequest is a struct used to abstract HTTP request entity.</p>

<b>Signature:</b>

```go
type HttpRequest struct {
	RawURL      string
	Method      string
	Headers     http.Header
	QueryParams url.Values
	FormData    url.Values
	Body        []byte
}
```

<b>Example:</b>

```go
package main

import (
    "fmt"
	"net"
    "github.com/duke-git/lancet/v2/netutil"
)

func main() {
	header := http.Header{}
	header.Add("Content-Type", "multipart/form-data")

	postData := url.Values{}
	postData.Add("userId", "1")
	postData.Add("title", "testItem")

	request := &netutil.HttpRequest{
		RawURL:   "https://jsonplaceholder.typicode.com/todos",
		Method:   "POST",
		Headers:  header,
		FormData: postData,
	}
}
```

### HttpClient

<p>HttpClient is a struct used to send HTTP request. It can be instanced with some configurations or none config.</p>

<b>Signature:</b>

```go
type HttpClient struct {
	*http.Client
	TLS     *tls.Config
	Request *http.Request
	Config  HttpClientConfig
}

type HttpClientConfig struct {
	SSLEnabled       bool
	TLSConfig        *tls.Config
	Compressed       bool
	HandshakeTimeout time.Duration
	ResponseTimeout  time.Duration
	Verbose          bool
}

func NewHttpClient() *HttpClient

func NewHttpClientWithConfig(config *HttpClientConfig) *HttpClient

```

<b>Example:</b>

```go
package main

import (
    "fmt"
	"net"
	"time"
    "github.com/duke-git/lancet/v2/netutil"
)

func main() {
	httpClientCfg := netutil.HttpClientConfig{
		SSLEnabled: true,
		HandshakeTimeout:10 * time.Second
	}
	httpClient := netutil.NewHttpClientWithConfig(&httpClientCfg)
}
```

### SendRequest

<p>Use HttpClient to send HTTP request.</p>

<b>Signature:</b>

```go
func (client *HttpClient) SendRequest(request *HttpRequest) (*http.Response, error)
```

<b>Example:</b>

```go
package main

import (
    "fmt"
	"net"
	"time"
    "github.com/duke-git/lancet/v2/netutil"
)

func main() {
	request := &netutil.HttpRequest{
		RawURL: "https://jsonplaceholder.typicode.com/todos/1",
		Method: "GET",
	}

	httpClient := netutil.NewHttpClient()
	resp, err := httpClient.SendRequest(request)
	if err != nil || resp.StatusCode != 200 {
		log.Fatal(err)
	}

	type Todo struct {
		UserId    int    `json:"userId"`
		Id        int    `json:"id"`
		Title     string `json:"title"`
		Completed bool   `json:"completed"`
	}

	var todo Todo
	httpClient.DecodeResponse(resp, &todo)

	fmt.Println(todo.Id) //1
}
```

### DecodeResponse

<p>Decode http response into target object.</p>

<b>Signature:</b>

```go
func (client *HttpClient) DecodeResponse(resp *http.Response, target any) error
```

<b>Example:</b>

```go
package main

import (
    "fmt"
	"net"
	"time"
    "github.com/duke-git/lancet/v2/netutil"
)

func main() {
	request := &netutil.HttpRequest{
		RawURL: "https://jsonplaceholder.typicode.com/todos/1",
		Method: "GET",
	}

	httpClient := netutil.NewHttpClient()
	resp, err := httpClient.SendRequest(request)
	if err != nil || resp.StatusCode != 200 {
		log.Fatal(err)
	}

	type Todo struct {
		UserId    int    `json:"userId"`
		Id        int    `json:"id"`
		Title     string `json:"title"`
		Completed bool   `json:"completed"`
	}

	var todo Todo
	httpClient.DecodeResponse(resp, &todo)

	fmt.Println(todo.Id) //1
}
```

### StructToUrlValues

<p>Convert struct to url values, only convert the field which is exported and has `json` tag.</p>

<b>Signature:</b>

```go
func StructToUrlValues(targetStruct any) url.Values
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/netutil"
)

func main() {
	type TodoQuery struct {
		Id     int `json:"id"`
		UserId int `json:"userId"`
	}
	todoQuery := TodoQuery{
		Id:     1,
		UserId: 2,
	}
	todoValues := netutil.StructToUrlValues(todoQuery)

	fmt.Println(todoValues.Get("id")) //1
	fmt.Println(todoValues.Get("userId")) //2
}
```

### HttpGet (Deprecated: use SendRequest for replacement)

<p>Send http get request.</p>

<b>Signature:</b>

```go
// params[0] is header which type should be http.Header or map[string]string,
// params[1] is query param which type should be url.Values or map[string]string,
// params[2] is post body which type should be []byte.
// params[3] is http client which type should be http.Client.
func HttpGet(url string, params ...any) (*http.Response, error)
```

<b>Example:</b>

```go
package main

import (
    "fmt"
	"io/ioutil"
	"log"
    "github.com/duke-git/lancet/v2/netutil"
)

func main() {
	url := "https://jsonplaceholder.typicode.com/todos/1"
	header := map[string]string{
		"Content-Type": "application/json",
	}

	resp, err := netutil.HttpGet(url, header)
	if err != nil {
		log.Fatal(err)
	}

	body, _ := ioutil.ReadAll(resp.Body)
	fmt.Println(body)
}
```

### HttpPost (Deprecated: use SendRequest for replacement)

<p>Send http post request.</p>

<b>Signature:</b>

```go
// params[0] is header which type should be http.Header or map[string]string,
// params[1] is query param which type should be url.Values or map[string]string,
// params[2] is post body which type should be []byte.
// params[3] is http client which type should be http.Client.
func HttpPost(url string, params ...any) (*http.Response, error)
```

<b>Example:</b>

```go
package main

import (
	"encoding/json"
    "fmt"
	"io/ioutil"
	"log"
    "github.com/duke-git/lancet/v2/netutil"
)

func main() {
	url := "https://jsonplaceholder.typicode.com/todos"
	header := map[string]string{
		"Content-Type": "application/json",
	}
	type Todo struct {
		UserId int    `json:"userId"`
		Title  string `json:"title"`
	}
	todo := Todo{1, "TestAddToDo"}
	bodyParams, _ := json.Marshal(todo)

	resp, err := netutil.HttpPost(url, header, nil, bodyParams)
	if err != nil {
		log.Fatal(err)
	}

	body, _ := ioutil.ReadAll(resp.Body)
	fmt.Println(body)
}
```

### HttpPut (Deprecated: use SendRequest for replacement)

<p>Send http put request.</p>

<b>Signature:</b>

```go
// params[0] is header which type should be http.Header or map[string]string,
// params[1] is query param which type should be url.Values or map[string]string,
// params[2] is post body which type should be []byte.
// params[3] is http client which type should be http.Client.
func HttpPut(url string, params ...any) (*http.Response, error)
```

<b>Example:</b>

```go
package main

import (
	"encoding/json"
    "fmt"
	"io/ioutil"
	"log"
    "github.com/duke-git/lancet/v2/netutil"
)

func main() {
	url := "https://jsonplaceholder.typicode.com/todos/1"
	header := map[string]string{
		"Content-Type": "application/json",
	}
	type Todo struct {
		Id     int    `json:"id"`
		UserId int    `json:"userId"`
		Title  string `json:"title"`
	}
	todo := Todo{1, 1, "TestPutToDo"}
	bodyParams, _ := json.Marshal(todo)

	resp, err := netutil.HttpPut(url, header, nil, bodyParams)
	if err != nil {
		log.Fatal(err)
	}

	body, _ := ioutil.ReadAll(resp.Body)
	fmt.Println(body)
}
```

### HttpDelete (Deprecated: use SendRequest for replacement)

<p>Send http delete request.</p>

<b>Signature:</b>

```go
// params[0] is header which type should be http.Header or map[string]string,
// params[1] is query param which type should be url.Values or map[string]string,
// params[2] is post body which type should be []byte.
// params[3] is http client which type should be http.Client.
func HttpDelete(url string, params ...any) (*http.Response, error)
```

<b>Example:</b>

```go
package main

import (
	"encoding/json"
    "fmt"
	"io/ioutil"
	"log"
    "github.com/duke-git/lancet/v2/netutil"
)

func main() {
	url := "https://jsonplaceholder.typicode.com/todos/1"
	resp, err := netutil.HttpDelete(url)
	if err != nil {
		log.Fatal(err)
	}

	body, _ := ioutil.ReadAll(resp.Body)
	fmt.Println(body)
}
```

### HttpPatch (Deprecated: use SendRequest for replacement)

<p>Send http patch request.</p>

<b>Signature:</b>

```go
// params[0] is header which type should be http.Header or map[string]string,
// params[1] is query param which type should be url.Values or map[string]string,
// params[2] is post body which type should be []byte.
// params[3] is http client which type should be http.Client.
func HttpPatch(url string, params ...any) (*http.Response, error)
```

<b>Example:</b>

```go
package main

import (
	"encoding/json"
    "fmt"
	"io/ioutil"
	"log"
    "github.com/duke-git/lancet/v2/netutil"
)

func main() {
	url := "https://jsonplaceholder.typicode.com/todos/1"
	header := map[string]string{
		"Content-Type": "application/json",
	}
	type Todo struct {
		Id     int    `json:"id"`
		UserId int    `json:"userId"`
		Title  string `json:"title"`
	}
	todo := Todo{1, 1, "TestPatchToDo"}
	bodyParams, _ := json.Marshal(todo)

	resp, err := netutil.HttpPatch(url, header, nil, bodyParams)
	if err != nil {
		log.Fatal(err)
	}

	body, _ := ioutil.ReadAll(resp.Body)
	fmt.Println(body)
}
```

### ParseHttpResponse

<p>Decode http response to specified interface.</p>

<b>Signature:</b>

```go
func ParseHttpResponse(resp *http.Response, obj any) error
```

<b>Example:</b>

```go
package main

import (
	"encoding/json"
    "fmt"
	"io/ioutil"
	"log"
    "github.com/duke-git/lancet/v2/netutil"
)

func main() {
	url := "https://jsonplaceholder.typicode.com/todos/1"
	header := map[string]string{
		"Content-Type": "application/json",
	}

	resp, err := netutil.HttpGet(url, header)
	if err != nil {
		log.Fatal(err)
	}

	type Todo struct {
		Id        int    `json:"id"`
		UserId    int    `json:"userId"`
		Title     string `json:"title"`
		Completed bool   `json:"completed"`
	}

	toDoResp := &Todo{}
	err = netutil.ParseHttpResponse(resp, toDoResp)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(toDoResp)
}
```
