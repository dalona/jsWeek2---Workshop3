let i = true
const eventList = []
let id = 0;
while (i) {
    // Sistema de gestion de eventos
    const userInput = prompt(`Please enter one of the following options:
                            \n 1. Create an event 
                            \n 2. See events
                            \n 3. Search events by name
                            \n 4. Update event
                            \n 5. Delete event
                            \n 6. Exit`);
    switch (userInput) {
        case "1":
            const eventName = prompt("Please enter the event´s name: ")
            const eventDate = prompt("Please enter the event´s date (YYYY-MM-DD): ");
            const eventDescription = prompt("Please enter the event´s description: ");
            const event = Object.assign({}, {
                id: id++, // incrementamos el id
                eventName, // lo mismo que eventName: eventName
                eventDate, // lo mismo que eventDate: eventDate
                eventDescription // lo mismo que eventDescription: eventDescription
            })

            eventList.push(event);
            break;
        case "2":
            eventList.forEach((event, index, arr) => {
                console.log(`Event ${index + 1}: ${event.eventName} - ${event.eventDate} - ${event.eventDescription}`);
            });
            break;
        case "3":
            const search = prompt("Please enter the name of the event you want to search: ");
            const foundEvents = eventList.filter(event => event.eventName === search);
            if (foundEvents.length === 0) { // 
                console.log("No events found with that name");
                break;
            }
            foundEvents.forEach((event, index) => {
                console.log(`Event ${index + 1}: ${event.eventName} - ${event.eventDate} - ${event.eventDescription}`);
            });
            break;
        case "4":
            // primero mostramos todos los eventos para visualizar el id
            eventList.forEach((event, index) => {
                console.log(`Evento ${index + 1}: ${event.eventName} - ${event.eventDate} - ${event.eventDescription}`);
            });
            // luego pedimos el id del evento a actualizar
            const eventId = prompt("Please enter the name of the event you want to update: ");
            // luego pedimos los nuevos datos
            const eventNameUpdated = prompt("Please enter the name of the event or Press `enter` if you want to keep the same: ");
            const eventDateUpdated = prompt("Please enter the date of the event or Press `enter` if you want to keep the same: ");
            const eventDescriptionUpdated = prompt("Please enter the description of the event or Press `enter` if you waant to keep the same: ");
            // actualizamos el evento
            if (eventNameUpdated) {
                eventList[eventId - 1].eventName = eventNameUpdated;
            }
            if (eventDateUpdated) {
                eventList[eventId - 1].eventDate = eventDateUpdated;
            }
            if (eventDescriptionUpdated) {
                eventList[eventId - 1].eventDescription = eventDescriptionUpdated;
            }
            break;
        case "5":
            // primero mostramos todos los eventos para visualizar el id
            eventList.forEach((event, index) => {
                console.log(`Evento ${index + 1}: ${event.eventName} - ${event.eventDate} - ${event.eventDescription}`);
            });
            // luego pedimos el id del evento a eliminar
            const eventIdToDelete = prompt("Please enter the ID o the event you want to delete: ");
            // eliminamos el evento
            // eventList = eventList.filter((event, index) => index !== eventIdToDelete - 1);
            eventList.splice(eventIdToDelete - 1, 1);
            break;
        case "6":
            i = false;
            break;
        default:
            break;
    }

}