using ControleFinanceiro.BLL.Models;
using ControleFinanceiro.DAL;
using ControleFinanceiro.DAL.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ControleFinanceiro.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriasController : ControllerBase
    {
        private readonly ICategoriaRepositorio _categoriaRepositorio;

        public CategoriasController(ICategoriaRepositorio categoriaRepositorio)
        {
            _categoriaRepositorio = categoriaRepositorio;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Categoria>>> GetCategorias()
        {
            return await _categoriaRepositorio.PegarTodos().ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Categoria>> GetCategoriaPorId(int id)
        {
            var categoria = await _categoriaRepositorio.PegarTodosPeloId(id);

            if (categoria == null)
            {
                return NotFound();
            }

            return categoria;
        }

        [HttpPost]
        public async Task<ActionResult<Categoria>> PostCategoria(Categoria categoria)
        {
            await _categoriaRepositorio.Inserir(categoria);            

            return Ok(new { messagem = $"Categoria {categoria.Nome} cadastrada com sucesso!" });
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> PutCategoria(int id, Categoria categoria)
        {
            if (id != categoria.CategoriaId)
            {
                return BadRequest();
            }

            else if (categoria != null)
            
            {
                await _categoriaRepositorio.Atualizar(categoria);
                return Ok(new { messagem = $"Categoria {categoria.Nome} atualizado com sucesso!" });
            }          

            return BadRequest();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Categoria>> DeleteCategoria(int id)
        {           
            var categoria = await _categoriaRepositorio.PegarTodosPeloId(id);
            
            if (categoria == null)
            {
                return NotFound();
            }

            await _categoriaRepositorio.Excluir(id);

            return Ok(new { messagem = $"Categoria {categoria.Nome} excluída com sucesso!" });


        }
       
    }
}
