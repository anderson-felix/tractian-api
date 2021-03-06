import { ObjectID } from 'typeorm';
import ICreateUnitDTO from '../dtos/ICreateUnitDTO';
import { Unit } from '../infra/typeorm/entities/Unit';

export default interface IUnitRepository {
  create(data: ICreateUnitDTO): Promise<Unit>;
  save(data: Unit): Promise<Unit>;
  saveMany(data: Unit[]): Promise<void>;
  findAll(): Promise<Unit[]>;
  findByCompanyId(companyId: ObjectID | string): Promise<Unit[]>;
  findById(id: ObjectID | string): Promise<Unit | undefined>;
  findByIdWithDeleted(id: ObjectID | string): Promise<Unit | undefined>;
  delete(data: Unit): Promise<void>;
  deleteByCompanyId(companyId: ObjectID | string): Promise<void>;
  deleteMany(data: Unit[]): Promise<void>;
}
