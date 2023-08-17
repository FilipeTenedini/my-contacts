import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactsForm';

export default function NewContact() {
  return (
    <>
      <PageHeader
        title="Novo Contato"
      />

      <ContactForm buttonLabel="Cadastrar" />
    </>
  );
}
