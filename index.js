function getCoordinates() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
         console.log(`Latitude: ${lat}`);
         console.log(`Longitude: ${long}`);
      },
      (error) => {
        console.error(`Error: ${error.message}`);
      }
    );
  }

  //Latitude: 60.1719011
  //Longitude: 24.9459504
  
  // Call the function when needed
  getCoordinates();
  
 