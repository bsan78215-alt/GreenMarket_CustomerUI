import { Card, Text, Divider } from '@/design-system/components';
import { PhotoPlaceholder } from './PhotoPlaceholder';
import { formatPrice, formatStock } from '../format';
import type { SellerOffer } from '../types';

interface OfferCardProps {
  offer: SellerOffer;
}

/** Экран 3 (Карточка товара): продавец, цена, единица, остаток, фото, описание. */
export function OfferCard({ offer }: OfferCardProps) {
  const photo = offer.photos[0];

  return (
    <Card className="gm-buyer-offer-card">
      {photo ? (
        <img className="gm-buyer-photo" src={photo} alt={offer.seller_name} loading="lazy" />
      ) : (
        <PhotoPlaceholder label={offer.seller_name} />
      )}
      <Text variant="bodyStrong" as="h3">
        {offer.seller_name}
      </Text>
      <Text variant="title" as="p">
        {formatPrice(offer.price)}{' '}
        <Text as="span" variant="caption" tone="secondary">
          / {offer.unit}
        </Text>
      </Text>
      <Text variant="caption" tone="secondary">
        Остаток: {formatStock(offer.stock, offer.unit)}
      </Text>
      {offer.description && (
        <>
          <Divider />
          <Text variant="body" tone="secondary">
            {offer.description}
          </Text>
        </>
      )}
    </Card>
  );
}
