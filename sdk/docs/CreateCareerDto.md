# CreateCareerDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** |  | [default to undefined]
**category** | **string** |  | [default to undefined]
**employmentType** | **string** |  | [default to undefined]
**description** | **string** |  | [default to undefined]
**status** | **string** |  | [optional] [default to StatusEnum_Active]
**active** | **boolean** |  | [optional] [default to true]
**icon** | **string** |  | [optional] [default to 'terminal']

## Example

```typescript
import { CreateCareerDto } from './api';

const instance: CreateCareerDto = {
    title,
    category,
    employmentType,
    description,
    status,
    active,
    icon,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
