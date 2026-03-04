# CreateTeamMemberDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**role** | **string** |  | [default to undefined]
**department** | **string** |  | [default to undefined]
**status** | **string** |  | [optional] [default to StatusEnum_Offline]
**isLead** | **boolean** |  | [optional] [default to false]
**avatarUrl** | **string** |  | [optional] [default to undefined]
**linkedin** | **string** |  | [optional] [default to undefined]
**github** | **string** |  | [optional] [default to undefined]
**twitter** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CreateTeamMemberDto } from './api';

const instance: CreateTeamMemberDto = {
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
