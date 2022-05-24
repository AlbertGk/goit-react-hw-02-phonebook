export const ContactList = ({ contacts, filter }) => {
  return (
    <ul>
      {{ filter } === ''
        ? contacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))
        : contacts
            .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
            .map(contact => (
              <li key={contact.id}>
                {contact.name}: {contact.number}
              </li>
            ))}
    </ul>
  );
};
