# 006 - Basic Testing

* We recommend to test services with `$httpBackend` it is very helpful to mock servers calls and it will separate the logic from the controller, it is easier to test and to understand.

* If you take a look of the Controller spec and you will find that we are mocking the service that we previously described to only manage promises, we are not testing our service in the controller spec, because it has being tested on it's own spec.

* In the controller spec, take a look of the controller declaration before each describe, and pointing `WeatherFactory` to the mocked Service object. 

In that way we are able to get 100% of coverage test.

Note: in this example we are not testing the materials modal, we will provide this example in the advanced testing practice.
