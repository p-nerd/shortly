# Models

## User

```
name: string
email: string
password: string
isVerified: boolean, default: false
primaryEmail: string
otherEmails: [
    {
        email: string
        isVerified: boolean, default: false
    }
]
mobileNumber: string
lastLogin: number
```

## LoginDevice

```
user_id: User@_id
ip: string,
isp: string,
location: string
loginTime: number
```
