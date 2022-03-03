import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import {
    HeroCardProps
} from './HeroCardType';

export const HeroCard = (props: HeroCardProps) => {

    const { id, name, image } = props;

    return (
        <Card
            key={`${id}-${name}`}
            sx={{maxWidth: 140}}
        >
            <CardMedia
                height={140}
                width={140}
                component='img'
                alt={name}
                image={image}
            />
            <CardContent>
                {name}
            </CardContent>
        </Card>
    )
}
