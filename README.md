# OSI 7 Layer & TCP/IP Model
![image](https://user-images.githubusercontent.com/10962668/226811511-a828bc0b-389f-491e-abc3-562b93b58ee7.png)

## TCP/UDP

### 3-way 핸드쉐이크
![image](https://user-images.githubusercontent.com/10962668/226827478-c2d67213-6ee8-4e44-9ee8-6742b1d3616d.png)


## IP

## Ethernet/Wifi(MAC Address)

# DNS
![image](https://user-images.githubusercontent.com/10962668/226812033-6bbefc13-7d60-4802-9b84-373af4ead7b9.png)

# HTTP

## Request
```
GET / HTTP/1.0
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5)
Accept: */*
Connection: keep-alive
```
```
PUT / HTTP/1.1
Host: zerocho.com
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5)
Accept: */*
Connection: close
```
### Header

### Body

## Response
```
HTTP/1.0 200 OK 
Content-Type: text/plain
Content-Length: 2644
Expires: Fri, 05 May 2023 16:00:00 GMT
Last-Modified: Wed, 22 March 2023 15:55:28 GMT
Server: Nginx

(response body)
(connection closed)
```

# HTTPS/SSL/TLS
![image](https://user-images.githubusercontent.com/10962668/226827952-2f7d0737-85b1-47bc-9a58-5c6d4a60a94d.png)


# HTTP2
HTTP/1.1 Pipe-lining
head-of-line blocking -> image sprite, css/js bundling

Multiplexing + Request Prioritization
Binary
Server Push

# HTTP3/QUIC
UDP based

# WebSocket
Upgrade
Full-duplex
