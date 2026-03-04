# TeamMembersApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**teamMembersControllerCreate**](#teammemberscontrollercreate) | **POST** /api/team-members | Create a team member|
|[**teamMembersControllerFindAll**](#teammemberscontrollerfindall) | **GET** /api/team-members | Get all team members|
|[**teamMembersControllerFindOne**](#teammemberscontrollerfindone) | **GET** /api/team-members/{id} | Get a team member by ID|
|[**teamMembersControllerRemove**](#teammemberscontrollerremove) | **DELETE** /api/team-members/{id} | Delete a team member|
|[**teamMembersControllerUpdate**](#teammemberscontrollerupdate) | **PATCH** /api/team-members/{id} | Update a team member|

# **teamMembersControllerCreate**
> teamMembersControllerCreate(createTeamMemberDto)


### Example

```typescript
import {
    TeamMembersApi,
    Configuration,
    CreateTeamMemberDto
} from './api';

const configuration = new Configuration();
const apiInstance = new TeamMembersApi(configuration);

let createTeamMemberDto: CreateTeamMemberDto; //

const { status, data } = await apiInstance.teamMembersControllerCreate(
    createTeamMemberDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTeamMemberDto** | **CreateTeamMemberDto**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teamMembersControllerFindAll**
> teamMembersControllerFindAll()


### Example

```typescript
import {
    TeamMembersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TeamMembersApi(configuration);

const { status, data } = await apiInstance.teamMembersControllerFindAll();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teamMembersControllerFindOne**
> teamMembersControllerFindOne()


### Example

```typescript
import {
    TeamMembersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TeamMembersApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.teamMembersControllerFindOne(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teamMembersControllerRemove**
> teamMembersControllerRemove()


### Example

```typescript
import {
    TeamMembersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TeamMembersApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.teamMembersControllerRemove(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teamMembersControllerUpdate**
> teamMembersControllerUpdate(updateTeamMemberDto)


### Example

```typescript
import {
    TeamMembersApi,
    Configuration,
    UpdateTeamMemberDto
} from './api';

const configuration = new Configuration();
const apiInstance = new TeamMembersApi(configuration);

let id: string; // (default to undefined)
let updateTeamMemberDto: UpdateTeamMemberDto; //

const { status, data } = await apiInstance.teamMembersControllerUpdate(
    id,
    updateTeamMemberDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateTeamMemberDto** | **UpdateTeamMemberDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

