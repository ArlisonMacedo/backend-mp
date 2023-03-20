import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import { AppDataSource } from "./data-source"
import { AmbientPad } from './entity/AmbientPad'
import { AgudoPad } from './entity/AgudoPad'
import { GuitarPad } from './entity/GuitarPad'


const app = express()
app.use(express.json())
app.use(cors())


AppDataSource.initialize()
    .then(async () => {
        console.log('connection initialized with database')
    })
    .catch((error) => console.log(error))

const ambientPadRepo = AppDataSource.getRepository(AmbientPad)
const agudoPadRepo = AppDataSource.getRepository(AgudoPad)
const guitarPadRepo = AppDataSource.getRepository(GuitarPad)

app.get('/ambient_pad', async (req, res) => {
    const ambient_pads = await ambientPadRepo.find()
    return res.json(ambient_pads)
})


app.get('/ambient_pad/:id', async (req, res) => {
    const { id } = req.params
    const ambient_pad = await ambientPadRepo.findOneBy({
        id: Number(id)
    })

    const ambient_padSerialie = {
        ...ambient_pad,
        pad_url: `https://mpadslive.com/uploads/ambient_pad/${ambient_pad.link}`
    }

    return res.json(ambient_padSerialie)
})

app.get('/agudo_pad', async (req, res) => {
    const agudo_pads = await agudoPadRepo.find()
    return res.json(agudo_pads)
})


app.get('/agudo_pad/:id', async (req, res) => {
    const { id } = req.params
    const agudo_pad = await agudoPadRepo.findOneBy({
        id: Number(id)
    })

    const agudo_padSerialize = {
        ...agudo_pad,
        pad_url: `https://mpadslive.com/uploads/agudo_pad/${agudo_pad.link}`
    }

    return res.json(agudo_padSerialize)
})

app.get('/guitar_pad', async (req, res) => {
    const guitar_pads = await guitarPadRepo.find()
    return res.json(guitar_pads)
})


app.get('/guitar_pad/:id', async (req, res) => {
    const { id } = req.params
    const guitar_pad = await guitarPadRepo.findOneBy({
        id: Number(id)
    })

    const guitar_padSerialize = {
        ...guitar_pad,
        pad_url: `https://mpadslive.com/uploads/guitar_pad/${guitar_pad.link}`
    }

    return res.json(guitar_padSerialize)
})

// app.use('/uploads/ambient_pad', express.static(path.join(__dirname, '..', 'uploads', 'AMBIENT_PAD')))
// app.use('/uploads/agudo_pad', express.static(path.join(__dirname, '..', 'uploads', 'AGUDO_PAD')))
// app.use('/uploads/guitar_pad', express.static(path.join(__dirname, '..', 'uploads', 'GUITAR_PAD')))

app.listen(21155, () => console.log('HTTP IS RUNNING'))



