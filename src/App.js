import Avatar from './Props/Avatar';
function Card({ children }) {
  return <div className="card">{children}</div>;
}
export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2',
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma',
          imageId: 'OKS67lh',
        }}
      />
      <Avatar
        size={50}
        person={{
          name: 'Lin Lanying',
          imageId: '1bX5QH6',
        }}
      />
    </Card>
  );
}
