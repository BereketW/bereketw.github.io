# TestimonialsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**testimonialsControllerCreate**](#testimonialscontrollercreate) | **POST** /api/testimonials | Create a testimonial|
|[**testimonialsControllerFindAll**](#testimonialscontrollerfindall) | **GET** /api/testimonials | Get all testimonials|
|[**testimonialsControllerFindOne**](#testimonialscontrollerfindone) | **GET** /api/testimonials/{id} | Get a testimonial by ID|
|[**testimonialsControllerRemove**](#testimonialscontrollerremove) | **DELETE** /api/testimonials/{id} | Delete a testimonial|
|[**testimonialsControllerUpdate**](#testimonialscontrollerupdate) | **PATCH** /api/testimonials/{id} | Update a testimonial|

# **testimonialsControllerCreate**
> testimonialsControllerCreate(createTestimonialDto)


### Example

```typescript
import {
    TestimonialsApi,
    Configuration,
    CreateTestimonialDto
} from './api';

const configuration = new Configuration();
const apiInstance = new TestimonialsApi(configuration);

let createTestimonialDto: CreateTestimonialDto; //

const { status, data } = await apiInstance.testimonialsControllerCreate(
    createTestimonialDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTestimonialDto** | **CreateTestimonialDto**|  | |


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

# **testimonialsControllerFindAll**
> testimonialsControllerFindAll()


### Example

```typescript
import {
    TestimonialsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TestimonialsApi(configuration);

const { status, data } = await apiInstance.testimonialsControllerFindAll();
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

# **testimonialsControllerFindOne**
> testimonialsControllerFindOne()


### Example

```typescript
import {
    TestimonialsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TestimonialsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.testimonialsControllerFindOne(
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

# **testimonialsControllerRemove**
> testimonialsControllerRemove()


### Example

```typescript
import {
    TestimonialsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TestimonialsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.testimonialsControllerRemove(
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

# **testimonialsControllerUpdate**
> testimonialsControllerUpdate(updateTestimonialDto)


### Example

```typescript
import {
    TestimonialsApi,
    Configuration,
    UpdateTestimonialDto
} from './api';

const configuration = new Configuration();
const apiInstance = new TestimonialsApi(configuration);

let id: string; // (default to undefined)
let updateTestimonialDto: UpdateTestimonialDto; //

const { status, data } = await apiInstance.testimonialsControllerUpdate(
    id,
    updateTestimonialDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateTestimonialDto** | **UpdateTestimonialDto**|  | |
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

