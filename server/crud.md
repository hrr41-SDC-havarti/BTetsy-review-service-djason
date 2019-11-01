
# CRUD API DOCUMENTATION

|HTTP VERB|  CRUD| PATH| PARAMETER| EXAMPLE|status|
|--|--|--|--|--|--|
|GET|Read|/api/seller/:sellerID|ID(Number)|/api/seller/4|200|
|POST|Create|/api/seller/||{id: number, seller: String, reviews: number, ratings: number}|201|
|PUT|Update|/api/seller/:ID|ObjectID(Generated ID)|/api/seller/4ecbe7f9e8c1c9092c000027|200|
|DELETE|Delete|/api/seller/:ID|ObjectID(Generated ID)|/api/seller/4ecbe7f9e8c1c9092c000027|200|
