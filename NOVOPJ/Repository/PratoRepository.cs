using NOVOPJ.DAL;
using NOVOPJ.DTO;
using NOVOPJ.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;

namespace NOVOPJ.Repository
{
    public class PratoRepository : BaseRepository
    {
        private CedroContext db = new CedroContext();

        private static readonly Expression<Func<Prato, PratoDTO>> AsPratoDTO =
            x => new PratoDTO
            {
                id_prato = x.id_prato,
                nome_prato = x.nome_prato,
                preco_prato = x.preco_prato,
                id_restaurante = x.id_restaurante,
                nome_restaurante = x.Restaurante.nome_restaurante
            };

        public PratoDTO GetOne(int id)
        {
            PratoDTO prato = db.Pratos.Include(p => p.Restaurante)
                    .Where(p => p.id_prato == id)
                    .Select(AsPratoDTO)
                    .FirstOrDefault();
            return prato;
        }

        public Prato GetOneByID(int id)
        {
            return db.Pratos.FirstOrDefault(p => p.id_prato == id);
        }

        public IQueryable<PratoDTO> Get()
        {
            return db.Pratos.Include(r => r.Restaurante).Select(AsPratoDTO);
        }

        public List<Prato> GetAll()
        {
            return db.Pratos.ToList();
        }

        public void Delete(Prato entity)
        {
            db.Pratos.Remove(entity);
            db.SaveChanges();
        }

        public List<Prato> GetByIdRestaurante(int id)
        {
            return db.Pratos.Where(x => x.id_restaurante == id).ToList();
        }

        public void Save(Prato entity)
        {
            db.Entry(entity).State = entity.id_prato == 0 ?
            EntityState.Added : EntityState.Modified;
            db.SaveChanges();
        }

        public List<Prato> GetByName(string nome)
        {
            return db.Pratos.Where(x => x.nome_prato.Contains(nome)).OrderBy(x => x.nome_prato).ToList();
        }
    }
}