# parking-lot
 
# Initial Thought
1. Users can be diffrentated by their role
    - properties of User:
    - id
    - name
    - mobile
    - email
    - password
    - ... profile

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

3. Each parking area contains multiple slots
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

    Parking area creation
    Parking area updation
    Parking slot creation
    Parking slot updation


    Get nearby parking area
    park vehicle
    unpark vehicle

    Admin report api


# How to run app
    docker-compose build
    docker-compose up