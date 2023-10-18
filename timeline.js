class Timeline {
    static get toolbox() {
        return {
            title: 'Timeline Node',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="122.879px" height="111.168px" viewBox="0 0 122.879 111.168" enable-background="new 0 0 122.879 111.168" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M4.429,59.641C1.971,59.627-0.022,61.694,0,64.153l0.271,29.062 c0.022,2.455,2.056,4.452,4.513,4.429l34.77-0.329l11.764-9.343v15.771c0,4.101,3.325,7.425,7.425,7.425s7.425-3.324,7.425-7.425 V40.376l17.159,13.627l34.769,0.328c2.457,0.024,4.491-1.973,4.513-4.428l0.271-29.062c0.021-2.459-1.971-4.526-4.43-4.513 l-36.426,0.196c-4.039,4.783-10.358,10.529-15.856,15.635V7.325c0-9.767-14.85-9.767-14.85,0v63.133 c-3.892-3.648-7.707-7.358-10.462-10.62L4.429,59.641L4.429,59.641z M98.088,26.358c4.955,0,8.972,4.017,8.972,8.973 c0,4.954-4.017,8.972-8.972,8.972c-4.956,0-8.973-4.018-8.973-8.972C89.115,30.375,93.132,26.358,98.088,26.358L98.088,26.358z M24.792,69.67c-4.956,0-8.972,4.018-8.972,8.972c0,4.956,4.017,8.973,8.972,8.973c4.955,0,8.972-4.017,8.972-8.973 C33.764,73.688,29.747,69.67,24.792,69.67L24.792,69.67z"/></g></svg>'
        }
    }

    constructor({data}) {
        this.data = data;
        this.wrapper = undefined;
        this.settings = [
            {
                name: 'light',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25px" viewBox="0 0 36 36" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#FFAC33" d="M16 2s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2V2zm18 14s2 0 2 2s-2 2-2 2h-2s-2 0-2-2s2-2 2-2h2zM4 16s2 0 2 2s-2 2-2 2H2s-2 0-2-2s2-2 2-2h2zm5.121-8.707s1.414 1.414 0 2.828s-2.828 0-2.828 0L4.878 8.708s-1.414-1.414 0-2.829c1.415-1.414 2.829 0 2.829 0l1.414 1.414zm21 21s1.414 1.414 0 2.828s-2.828 0-2.828 0l-1.414-1.414s-1.414-1.414 0-2.828s2.828 0 2.828 0l1.414 1.414zm-.413-18.172s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828l-1.414 1.414zm-21 21s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828l-1.414 1.414zM16 32s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2v-2z"/><circle fill="#FFAC33" cx="18" cy="18" r="10"/></svg>'
            },
            {
                name: 'dark',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="25px" width="25px" version="1.1" id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
                <path style="fill:#E6E9ED;" d="M512,256c0,141.373-114.623,255.996-256.004,255.996S0,397.373,0,256  C0,114.619,114.615,0.004,255.996,0.004S512,114.619,512,256z"/>
                <g>
                    <path style="fill:#CCD1D9;" d="M394.658,341.342c0,17.656-14.312,32-32,32c-17.672,0-31.999-14.344-31.999-32   c0-17.687,14.327-31.999,31.999-31.999C380.346,309.343,394.658,323.655,394.658,341.342z"/>
                    <path style="fill:#CCD1D9;" d="M266.66,106.666c0,17.68-14.32,32-32,32c-17.671,0-31.999-14.32-31.999-32   c0-17.671,14.328-31.999,31.999-31.999C252.34,74.667,266.66,88.995,266.66,106.666z"/>
                    <path style="fill:#CCD1D9;" d="M405.33,192.001c0,23.562-19.109,42.663-42.672,42.663s-42.663-19.101-42.663-42.663   s19.101-42.663,42.663-42.663S405.33,168.438,405.33,192.001z"/>
                    <path style="fill:#CCD1D9;" d="M277.332,405.342c0,23.562-19.102,42.655-42.672,42.655c-23.562,0-42.663-19.093-42.663-42.655   c0-23.578,19.101-42.688,42.663-42.688C258.23,362.654,277.332,381.764,277.332,405.342z"/>
                    <path style="fill:#CCD1D9;" d="M213.278,256c0,41.234-33.429,74.655-74.663,74.655S63.952,297.234,63.952,256   c0-41.233,33.429-74.663,74.663-74.663S213.278,214.767,213.278,256z"/>
                </g>
                </svg>`
            }
        ]
    }

    renderSettings() {
        const wrapper = document.createElement('div');
        this.settings.forEach( item => {
            let button = document.createElement('div');
            button.classList.add('cdx-settings-button');
            button.innerHTML = item.icon;
            wrapper.appendChild(button);

            button.addEventListener('click', ()=> {
                this._themeSelected(item.name);
                button.classList.toggle('cdx-settings-button--active');
            })
        })
        wrapper.appendChild(document.createElement('hr'));
        return wrapper;
    }

    render() {
        console.log('Rendering...')
        console.log('Saved data', this.data)
        let divTimeline = document.createElement('div');
        divTimeline.classList.add('e-timeline')

        let divContainer = document.createElement('div');
        divContainer.classList.add('e-container');
        
        let divContent = document.createElement('div');
        divContent.classList.add('e-content');

        let title = document.createElement('h2');
        title.contentEditable = true;
        title.classList.add('e-title','e-inputs');

        let subtitle = document.createElement('h4');
        subtitle.contentEditable = true;
        subtitle.classList.add('e-subtitle', 'e-inputs');

        let content = document.createElement('div');
        content.contentEditable = true;
        content.classList.add('e-inputs');
        
        divContent.appendChild(title);
        divContent.appendChild(subtitle);
        divContent.appendChild(content);

        divContainer.appendChild(divContent);

        divTimeline.appendChild(divContainer);

        title.innerText = this.data && this.data.title ? this.data.title : '';
        subtitle.innerText = this.data && this.data.subtitle ? this.data.subtitle : '';
        content.innerText = this.data && this.data.body ? this.data.body : '';

        (this.data && (this.data.position == 'left')) ? divContainer.classList.add('e-left') : divContainer.classList.add('e-right');

        if(!(this.data.theme == undefined)) {
            switch(this.data.theme) {
                case 'light':
                    divTimeline.classList.add('e-timeline-light')
                    divContent.classList.add('e-content-light')
                    break;
                case 'dark':
                    divTimeline.classList.add('e-timeline-dark'); 
                    divContent.classList.add('e-content-dark'); 
                    break;
                default:
                    break;
            }
        }
        else {
            divTimeline.classList.add('e-timeline-dark'); 
            divContent.classList.add('e-timeline-dark');
        }

        this.wrapper = divTimeline;
        return this.wrapper;
    }

    save(blockContent) {
        let divContainer = blockContent.firstChild;
        let divContent = divContainer.firstChild;

        let title = divContent.firstChild;
        let subtitle = title.nextSibling;
        let body = subtitle.nextSibling;
        let position = (divContainer.classList.contains('e-left')) ? 'left' : 'right';
        let theme = this.data.theme;

        return {
            title: title.innerText,
            subtitle: subtitle.innerText,
            body: body.innerText,
            position: position,
            theme: theme
        }
    }

    _themeSelected(theme) {
        console.log('Theme Selected: ', theme);
        this.data.theme = theme;

        this.wrapper.classList = `e-timeline e-timeline-${theme}`;
        this.wrapper.getElementsByClassName('e-content')[0].classList = `e-content e-content-${theme}`;
    }
}