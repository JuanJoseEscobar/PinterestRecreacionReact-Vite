import { Card } from './Card';
import './Style.scss';


export const GriCards = () => {
  return (
    <div className='gridContent'>
        <div className='grid'>
            <Card url={'https://picsum.photos//250/600'}/>
            <Card url={'https://picsum.photos//250/200'}/>
            <Card url={'https://picsum.photos//250/250'}/>
            <Card url={'https://picsum.photos//250/300'}/>
            <Card url={'https://picsum.photos//250/600'}/>
            <Card url={'https://picsum.photos//300/400'}/>
            <Card url={'https://picsum.photos//250/600'}/>
            <Card url={'https://picsum.photos//250/200'}/>
            <Card url={'https://picsum.photos//250/250'}/>
            <Card url={'https://picsum.photos//250/300'}/>
            <Card url={'https://picsum.photos//250/600'}/>
            <Card url={'https://picsum.photos//300/400'}/>
        </div>
    </div>
  )
}
