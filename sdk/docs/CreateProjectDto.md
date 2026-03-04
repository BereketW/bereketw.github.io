# CreateProjectDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** |  | [default to undefined]
**description** | **string** |  | [default to undefined]
**category** | **string** |  | [default to undefined]
**url** | **string** |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to StatusEnum_InProgress]
**coverImage** | **string** |  | [optional] [default to undefined]
**members** | [**Array&lt;ProjectMemberDto&gt;**](ProjectMemberDto.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CreateProjectDto } from './api';

const instance: CreateProjectDto = {
    title,
    description,
    category,
    url,
    tags,
    status,
    coverImage,
    members,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
