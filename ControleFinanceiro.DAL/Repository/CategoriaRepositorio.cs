using ControleFinanceiro.BLL.Models;
using ControleFinanceiro.DAL.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace ControleFinanceiro.DAL.Repository
{
    public class CategoriaRepositorio : RepositorioGenerico<Categoria>, ICategoriaRepositorio
    {
        private readonly Context _context;

        public CategoriaRepositorio(Context context) : base(context)
        {
            _context = context; 
        }

        public new IQueryable<Categoria> PegarTodos()
        {
            try
            {
                return _context.Categorias.Include(c => c.Tipo);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public new async Task<Categoria> PegarPeloId(int id)
        {
            try
            {
                var entity = await _context.Categorias.Include(c =>c.Tipo)
                    .FirstOrDefaultAsync(c => c.CategoriaId == id);
                return entity;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}
