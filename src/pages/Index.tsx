import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
  });

  const rooms = [
    {
      id: 'deluxe',
      title: 'Номер Делюкс',
      description: 'Элегантный номер с видом на город, площадью 35 м²',
      price: '15 000',
      image: '/img/fba2b6cc-9e4c-4c54-b2f5-2ccbb03cea5c.jpg',
    },
    {
      id: 'suite',
      title: 'Люкс',
      description: 'Просторный люкс с панорамным видом, площадью 60 м²',
      price: '35 000',
      image: '/img/fba2b6cc-9e4c-4c54-b2f5-2ccbb03cea5c.jpg',
    },
    {
      id: 'presidential',
      title: 'Президентский Люкс',
      description: 'Роскошные апартаменты с терассой, площадью 120 м²',
      price: '75 000',
      image: '/img/fba2b6cc-9e4c-4c54-b2f5-2ccbb03cea5c.jpg',
    },
  ];

  const services = [
    {
      icon: 'Sparkles',
      title: 'SPA & Wellness',
      description: 'Премиальный спа-центр с бассейном и сауной',
    },
    {
      icon: 'Utensils',
      title: 'Ресторан',
      description: 'Изысканная кухня от шеф-повара мирового уровня',
    },
    {
      icon: 'Car',
      title: 'Трансфер',
      description: 'Персональный трансфер на автомобилях премиум-класса',
    },
    {
      icon: 'Headphones',
      title: 'Консьерж 24/7',
      description: 'Круглосуточная поддержка для решения любых вопросов',
    },
  ];

  const gallery = [
    '/img/1d2702d8-048e-4f85-9df0-6d983ab0bc9a.jpg',
    '/img/4d2916ab-d469-47b7-b4de-6fa7fbfb3a4e.jpg',
    '/img/fba2b6cc-9e4c-4c54-b2f5-2ccbb03cea5c.jpg',
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-primary/20">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary tracking-wide">LUXURY HOTEL</h1>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-sm text-gray-300 hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-sm text-gray-300 hover:text-primary transition-colors">
                Галерея
              </button>
              <button onClick={() => scrollToSection('rooms')} className="text-sm text-gray-300 hover:text-primary transition-colors">
                Номера
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm text-gray-300 hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('booking')} className="text-sm text-gray-300 hover:text-primary transition-colors">
                Бронирование
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm text-gray-300 hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-black font-medium">
              Забронировать
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/img/1d2702d8-048e-4f85-9df0-6d983ab0bc9a.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">Добро пожаловать</h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 font-light">В мир элегантности и безупречного качества</p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-black px-8 py-6 text-lg font-medium"
            onClick={() => scrollToSection('gallery')}
          >
            Посмотреть галерею
          </Button>
        </div>
      </section>

      <section id="gallery" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">Фотогалерея</h2>
            <p className="text-lg text-muted-foreground">Откройте для себя наш отель</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="relative h-80 overflow-hidden rounded-lg group cursor-pointer border border-primary/20"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <Icon name="ZoomIn" className="text-primary" size={48} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="rooms" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">Номера и Люксы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Каждый номер создан для вашего абсолютного комфорта и удовольствия
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <Card
                key={room.id}
                className="overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 cursor-pointer group bg-background border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-black px-4 py-2 rounded font-medium">
                    {room.price} ₽/ночь
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{room.title}</h3>
                  <p className="text-muted-foreground mb-4">{room.description}</p>
                  <Button
                    className="w-full bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300"
                    onClick={() => {
                      setSelectedRoom(room.id);
                      scrollToSection('booking');
                    }}
                  >
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">Услуги Отеля</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Безупречный сервис для самых взыскательных гостей
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-lg border border-primary/10 hover:border-primary/30 hover:bg-card transition-all duration-500 group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                  <Icon name={service.icon} className="text-primary group-hover:text-black" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">Бронирование</h2>
              <p className="text-lg text-muted-foreground">Забронируйте ваше незабываемое пребывание</p>
            </div>
            <Card className="p-8 bg-background border-primary/20">
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="room" className="text-foreground">Выберите номер</Label>
                  <select
                    id="room"
                    value={selectedRoom || ''}
                    onChange={(e) => setSelectedRoom(e.target.value)}
                    className="w-full px-4 py-3 bg-card border border-primary/20 text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Выберите тип номера</option>
                    {rooms.map((room) => (
                      <option key={room.id} value={room.id}>
                        {room.title} - {room.price} ₽/ночь
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="checkIn" className="text-foreground">Дата заезда</Label>
                    <Input
                      id="checkIn"
                      type="date"
                      value={bookingData.checkIn}
                      onChange={(e) => setBookingData({ ...bookingData, checkIn: e.target.value })}
                      className="bg-card border-primary/20 text-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="checkOut" className="text-foreground">Дата выезда</Label>
                    <Input
                      id="checkOut"
                      type="date"
                      value={bookingData.checkOut}
                      onChange={(e) => setBookingData({ ...bookingData, checkOut: e.target.value })}
                      className="bg-card border-primary/20 text-foreground"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-foreground">Количество гостей</Label>
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    max="6"
                    value={bookingData.guests}
                    onChange={(e) => setBookingData({ ...bookingData, guests: e.target.value })}
                    className="border-gray-300"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-black py-6 text-lg font-medium">
                  Подтвердить бронирование
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">Контакты</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-gray-300">Москва, ул. Тверская, 15</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-gray-300">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-300">info@luxuryhotel.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Режим работы</h3>
                    <p className="text-gray-300">Круглосуточно</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card border border-primary/20 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Как добраться</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex gap-3">
                  <Icon name="Train" className="text-primary mt-1" size={20} />
                  <p>Метро: станция "Тверская" (5 минут пешком)</p>
                </div>
                <div className="flex gap-3">
                  <Icon name="Car" className="text-primary mt-1" size={20} />
                  <p>На автомобиле: подземная парковка для гостей</p>
                </div>
                <div className="flex gap-3">
                  <Icon name="Plane" className="text-primary mt-1" size={20} />
                  <p>Аэропорт Шереметьево: 40 минут на автомобиле</p>
                </div>
              </div>
              <div className="mt-6 h-64 bg-background border border-primary/20 rounded-lg overflow-hidden">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A64b0d0d6f6b1f1e8e0f8e0f8e0f8e0f8e0f8e0f8e0f8e0f8e0f8e0f8e0&amp;source=constructor"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Карта отеля"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-primary/20 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3 tracking-wide text-primary">LUXURY HOTEL</h2>
          <p className="text-muted-foreground">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;