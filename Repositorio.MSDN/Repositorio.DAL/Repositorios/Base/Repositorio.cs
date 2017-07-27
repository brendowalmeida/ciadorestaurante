using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using Repositorio.DAL.Contexto;

namespace Repositorio.DAL.Repositorios.Base
{
    public class Repositorio<TEntity> : IDisposable, IRepositorio<TEntity> where TEntity : class
    {
        BancoContexto ctx = new BancoContexto();
        public void Adicionar(TEntity obj)
        {
            ctx.Set<TEntity>().Add(obj);
        }

        public void Atualizar(TEntity obj)
        {
            ctx.Entry(obj).State = EntityState.Modified;
        }

        public void Excluir(Func<TEntity, bool> predicate)
        {
            ctx.Set<TEntity>()
                .Where(predicate).ToList()
                .ForEach(del => ctx.Set<TEntity>().Remove(del));
        }

        public TEntity Find(params object[] key)
        {
            return ctx.Set<TEntity>().Find(key);
        }

        public IQueryable<TEntity> Get(Func<TEntity, bool> predicate)
        {
            return GetAll().Where(predicate).AsQueryable();
        }

        public IQueryable<TEntity> GetAll()
        {
            return ctx.Set<TEntity>();
        }

        public void SalvarTodos()
        {
            ctx.SaveChanges();
        }
        public void Dispose()
        {
            ctx.Dispose();
        }
    }
}
