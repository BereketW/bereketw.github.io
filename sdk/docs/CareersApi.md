# CareersApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**careersControllerCreate**](#careerscontrollercreate) | **POST** /api/careers | Create a career opening|
|[**careersControllerFindAll**](#careerscontrollerfindall) | **GET** /api/careers | Get all career openings|
|[**careersControllerFindOne**](#careerscontrollerfindone) | **GET** /api/careers/{id} | Get a career opening by ID|
|[**careersControllerRemove**](#careerscontrollerremove) | **DELETE** /api/careers/{id} | Delete a career opening|
|[**careersControllerUpdate**](#careerscontrollerupdate) | **PATCH** /api/careers/{id} | Update a career opening|

# **careersControllerCreate**
> careersControllerCreate(createCareerDto)


### Example

```typescript
import {
    CareersApi,
    Configuration,
    CreateCareerDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CareersApi(configuration);

let createCareerDto: CreateCareerDto; //

const { status, data } = await apiInstance.careersControllerCreate(
    createCareerDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCareerDto** | **CreateCareerDto**|  | |


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

# **careersControllerFindAll**
> careersControllerFindAll()


### Example

```typescript
import {
    CareersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CareersApi(configuration);

const { status, data } = await apiInstance.careersControllerFindAll();
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

# **careersControllerFindOne**
> careersControllerFindOne()


### Example

```typescript
import {
    CareersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CareersApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.careersControllerFindOne(
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

# **careersControllerRemove**
> careersControllerRemove()


### Example

```typescript
import {
    CareersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CareersApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.careersControllerRemove(
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

# **careersControllerUpdate**
> careersControllerUpdate(updateCareerDto)


### Example

```typescript
import {
    CareersApi,
    Configuration,
    UpdateCareerDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CareersApi(configuration);

let id: string; // (default to undefined)
let updateCareerDto: UpdateCareerDto; //

const { status, data } = await apiInstance.careersControllerUpdate(
    id,
    updateCareerDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCareerDto** | **UpdateCareerDto**|  | |
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

