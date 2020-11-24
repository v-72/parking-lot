# parking-lot
 
# Initial Thought
1. Users can be diffrentated by their role
```sh
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| id        | int          | NO   | PRI | NULL    | auto_increment |
| name      | varchar(255) | NO   |     | NULL    |                |
| email     | varchar(255) | NO   | UNI | NULL    |                |
| mobile    | varchar(255) | NO   | UNI | NULL    |                |
| password  | varchar(255) | YES  |     | NULL    |                |
| createdAt | datetime     | YES  |     | NULL    |                |
| updatedAt | datetime     | YES  |     | NULL    |                |
| roleId    | int          | YES  | MUL | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
```sh
    - Roles:
    1. Admin
    2. User

    - for simplicty initially can avoide user crud apis, users can be created from seed.

2. Admin can create multiple parking area.
    - properties of parking area
    - id
    - name
    - userId (Admin who owns the parking area)
    - lattitude
    - longitude  
    - ... timestamps

    - lattitude, longitude can be used to find nearest parking area based on user's current location

3. Each parking lot contains multiple spots
    - properties of parking slot
    - slotNumber
    - parkingLotId
    - underMaintence: Boolean
    - ...

4. Parking Activity 

    - records of parking / unparking of vehicles
    - id
    - parkingLotId
    - parkingSlotId 
    - parkingTime
    - unparkingTime
    - amount
    - vehicleType // May not be needed in intial release
    - vehicleNo // May not be needed in intial release
# APIS:
    create-parking-lot // create parking spot with multiple parking spots
    
    curl --location --request POST 'http://localhost:9001/api/v1/parking-lots' \
        --header 'Content-Type: application/json' \
        --data-raw '{
            "name": "parking area 1",
            "numLots": 2,
            "userId": 1
        }'

    
    park-vehicle // park vehicle into parking spot

    curl --location --request POST 'http://localhost:9001/api/v1/parking-lots/1/park' \
        --header 'Content-Type: application/json' \
        --data-raw '{
            "vehicleNo": "KA01HH1013"
        }'

    unpark-vehicle // unpark vehicle from parking spot

    curl --location --request PUT 'http://localhost:9001/api/v1/parking-lots/unpark' \
        --header 'Content-Type: application/json' \
        --data-raw '{
            "vehicleNo": "KA01HH1013",
            "parkingLotId": 1
        }'

    update-parking-spot  // put parking spot under maintanance 

    curl --location --request PUT 'http://localhost:9001/api/v1/parking-spots/1' \
        --header 'Content-Type: application/json' \
        --data-raw '{
            "underMaintanence": true,
            "userId": 1
        }'  
    get-parkinglot-details // get current status of parking lot
        curl --location --request GET 'http://localhost:9001/api/v1/parking-lots/1'

    get-activities //get consolidated report

    curl --location --request GET 'http://localhost:9001/api/v1/parking-activities'

# How to run app
    docker-compose build
    docker-compose up


# Things missing
    * API authorization
    * API Request validation
        - define json schema for each request 
        - validate incoming request aginest schema
    *  Query support for parking-activities api (time range, parking lot, type of vehicle ect)
    * Support to different type of vehicle (Treating all vehicle as medium sized vehicle)
