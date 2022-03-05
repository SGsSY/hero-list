import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {
    HeroCardProps
} from './HeroCardType';
import { useParams } from 'react-router-dom';

export const HeroCard = (props: HeroCardProps) => {

    const params = useParams();

    const { id, name, image } = props;

    return (
        <Card
            key={`${id}-${name}`}
            sx={{
                maxWidth: 240,
                margin: 1,
                backgroundColor: params.id === id? '#1976d2': 'transparent'
            }}
        >
            <CardMedia
                height={240}
                component='img'
                alt={name}
                image={image}
            />
            <CardContent style={{
                textAlign: 'center',
            }}>
                {name}
            </CardContent>
        </Card>
    )
}
