# /users

## POST /users

### request payload

```
{
    email: string,
    password: string, min: 6, max: 32,
    name: string, max: 128, optional,
    mobileNumber: string, max: 50, optional,
}
```

### 201 response - "newly created user"

```
{
    success: true,
    message: string,
    data: {
        _id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        email: string;
        isVerified: boolean;
        primaryEmail: string;
        lastLogin: Date;
        othersEmails?: OtherEmail[];
        mobileNumber?: string;
        token: string;
    }
}
```

### 400 response - "validation error"

```
{
    success: false,
    message: string,
    data: <"Zod errors">
}
```

### 409 response - "email already exist"

```
{
    success: false,
    message: string,
    data: <"Zod errors">
}
```

### 500 response - "internal server error"

```
{
    success: false,
    message: string,
    data: string
}
```
