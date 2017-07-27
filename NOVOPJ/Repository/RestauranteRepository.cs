using NOVOPJ.DAL;
using NOVOPJ.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace NOVOPJ.Repository
{
    public class RestauranteRepository : BaseRepository
    {
        private CedroContext db = new CedroContext();

        private PratoRepository _PratoRepository;

        public PratoRepository PratoRepository
        {
            get
            {
                if (_PratoRepository == null)
                    _PratoRepository = new PratoRepository();
                return _PratoRepository;
            }
            set { _PratoRepository = value; }
        }

        public Restaurante GetOne(int id)
        {
            return db.Restaurantes.FirstOrDefault(e => e.id_restaurante == id);
        }

        public List<Restaurante> GetAll()
        {
            return db.Restaurantes.ToList();
        }

        public void Delete(Restaurante entity)
        {
            List<Prato> pratos = PratoRepository.GetByIdRestaurante(entity.id_restaurante);

            foreach(Prato p in pratos)
            {
                PratoRepository.Delete(p);
            }

            db.Restaurantes.Remove(entity);
            db.SaveChanges();
        }

        public void Save(Restaurante entity)
        {
            db.Entry(entity).State = entity.id_restaurante == 0 ?
            EntityState.Added : EntityState.Modified;
            db.SaveChanges();
        }

        public List<Restaurante> GetByName(string nome)
        {
            return db.Restaurantes.Where(x => x.nome_restaurante.Contains(nome)).OrderBy(x => x.nome_restaurante).ToList();
        }
    }
}