# UpdateTeamMemberDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the member. | [optional] [default to undefined]
**role** | **string** |  | [optional] [default to undefined]
**department** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to StatusEnum_Default]
**isLead** | **boolean** |  | [optional] [default to false]
**avatarUrl** | **string** |  | [optional] [default to undefined]
**linkedin** | **string** |  | [optional] [default to undefined]
**github** | **string** |  | [optional] [default to undefined]
**twitter** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateTeamMemberDto } from './api';

const instance: UpdateTeamMemberDto = {
    name,
    role,
    department,
    status,
    isLead,
    avatarUrl,
    linkedin,
    github,
    twitter,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)