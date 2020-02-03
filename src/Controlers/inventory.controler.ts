// import Pet, { IPet } from '../Models/inventory.model';
// import { IUser } from '../Models/order.model';

// interface ICreatePetInput {
//   owner: IUser['_id'];
//   name: IPet['name'];
// }


// async function CreatePet({ owner, name }: ICreatePetInput): Promise<IPet> {
//   return await Pet.create({
//     owner,
//     name
//   })
//     .then((data: IPet) => {
//       return data;
//     })
//     .catch((error: Error) => {
//       throw error;
//     });
// }