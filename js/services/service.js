/*
 * Security contexts
 */

/*
 * Service settings
 */

/*
 * Services
 */

var Warehouse_Product_save_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/code/32c294fb-45eb-4f66-9f88-bc57daa64c14/exec',
    'dataType': 'json',
    'type': 'post',
    'contentType': false,

    'defaultRequest': {
        "headers": {
            "Content-Type": "text/plain",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Warehouse_Product_list_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/code/ed269c1a-49fd-4c8a-b4af-db2b958b9ad3/exec',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'defaultRequest': {
        "headers": {
            "Content-Type": "application/json",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Warehouse_Product_search_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/code/e9c44d5c-2012-42a6-bf9e-162c37cbfefa/exec',
    'dataType': 'json',
    'type': 'post',
    'contentType': false,

    'defaultRequest': {
        "headers": {
            "Content-Type": "text/plain",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var BarcodeService = new Apperyio.BarCodeService({
    'defaultRequest': {
        "data": null
    }
});