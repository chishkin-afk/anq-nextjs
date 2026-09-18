import Header from '@/widgets/Header/Header';

export default function MainPage() {
  return (
    <Header
      links={[
        {
          title: 'how it works',
          path: '#guide',
        },
        {
          title: 'about',
          path: '#about',
        },
        {
          title: 'features',
          path: '#features',
        },
      ]}
    />
  );
}
